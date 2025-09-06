'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, X } from 'lucide-react';
import { toast } from "sonner";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const categories = ['Clothing', 'Electronics', 'Books', 'Home & Garden', 'Toys', 'Sports', 'Other'];

const editProductFormSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters long.' }).trim(),
  category: z.string({ required_error: 'Please select a category.' }),
  description: z.string().max(500, { message: 'Description cannot exceed 500 characters.' }).trim().optional(),
  price: z.coerce.number({ invalid_type_error: 'Price must be a number.' }).positive({ message: 'Price must be positive.' }),
  stock: z.coerce.number({ invalid_type_error: 'Stock must be a number.' }).int().nonnegative(),
  tags: z.array(z.string().min(2)).optional(),
  isActive: z.boolean().default(true),
  image: z.instanceof(File).optional()
    .refine((file) => !file || file.size < 2 * 1024 * 1024, 'New image size must be less than 2MB.')
    .refine((file) => !file || ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), 'Only .jpg, .png, and .webp formats are supported.'),
});

export default function EditProductForm({ initialProductData = {} }) {
  const [imagePreview, setImagePreview] = useState(initialProductData?.imageUrl || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTag, setCurrentTag] = useState('');
  const didReset = useRef(false);

  const form = useForm({
    resolver: zodResolver(editProductFormSchema),
    defaultValues: {
      title: initialProductData?.title || '',
      category: initialProductData?.category || categories[0],
      description: initialProductData?.description || '',
      price: initialProductData?.price || 0,
      stock: initialProductData?.stock || 0,
      tags: initialProductData?.tags || [],
      isActive: initialProductData?.isActive === false ? false : true,
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (!didReset.current) {
      form.reset({
        title: initialProductData.title || '',
        category: initialProductData.category || categories[0],
        description: initialProductData.description || '',
        price: initialProductData.price || 0,
        stock: initialProductData.stock || 0,
        tags: initialProductData.tags || [],
        isActive: initialProductData.isActive === false ? false : true,
      });
      setImagePreview(initialProductData.imageUrl || null);
      didReset.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProductData]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue('image', file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (currentTag.trim()) {
      const currentTags = form.getValues('tags') || [];
      if (!currentTags.includes(currentTag.trim())) {
        form.setValue('tags', [...currentTags, currentTag.trim()], { shouldValidate: true });
        setCurrentTag('');
      }
    }
  };

  const removeTag = (tagToRemove) => {
    const currentTags = form.getValues('tags') || [];
    form.setValue('tags', currentTags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const submissionData = {
      ...data,
      existingImageUrl: initialProductData.imageUrl,
    };
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Product Updated! ✨", {
      description: "Your changes have been saved successfully.",
      duration: 5000,
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="max-w-2xl mx-auto my-12 border-green-600">
      <CardHeader>
        <CardTitle className="text-2xl text-green-700">Edit Product Details</CardTitle>
        <CardDescription className="text-green-600">Update the product information and status below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Product Status Checkbox */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center gap-4 my-6 ">
                  <FormLabel className="text-base">Product Active</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-green-600"
                    />
                  </FormControl>
                  <FormDescription className="text-green-600">
                    Uncheck to hide this product from your storefront.
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="border-green-600 focus:ring-green-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-green-600 focus:ring-green-600">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="price" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Price ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} className="border-green-600 focus:ring-green-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="stock" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" step="1" min="0" {...field} className="border-green-600 focus:ring-green-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField name="description" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={4} {...field} className="border-green-600 focus:ring-green-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="tags" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <div>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Add a tag..." value={currentTag} onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
                        className="border-green-600 focus:ring-green-600"
                      />
                      <Button type="button" onClick={addTag} className="bg-green-600 hover:bg-green-700 text-black">Add</Button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {field.value?.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                          {tag}
                          <button type="button" className="ml-2 rounded-full outline-none hover:bg-green-300" onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="image" render={() => (
              <FormItem>
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <div>
                    <div className="mb-2">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Product Preview" className="w-full h-48 object-contain rounded border border-green-600" />
                      ) : (
                        <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-green-400 rounded text-green-400">No Image</div>
                      )}
                    </div>
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="block text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                  </div>
                </FormControl>
                <FormDescription className="text-green-600">Upload a new image to replace the existing one.</FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700  text-lg py-4 font-bold">
              {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : 'Save Changes'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}