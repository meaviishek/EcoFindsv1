'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, X } from 'lucide-react';
import { toast } from "sonner";

// Shadcn/ui Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Define available categories
const categories = ['Clothing', 'Electronics', 'Books', 'Home & Garden', 'Toys', 'Sports', 'Other'];

// Define the validation schema using Zod, now with tags and stock
const productFormSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters long.' }).trim(),
  category: z.string({ required_error: 'Please select a category.' }),
  description: z.string().max(500, { message: 'Description cannot exceed 500 characters.' }).trim().optional(),
  price: z.coerce.number({ invalid_type_error: 'Price must be a number.' }).positive({ message: 'Price must be positive.' }),
  stock: z.coerce.number({ invalid_type_error: 'Stock must be a number.' }).int({ message: "Stock must be a whole number." }).nonnegative({ message: "Stock can't be negative." }),
  tags: z.array(z.string().min(2, { message: "Each tag must be at least 2 characters." })).optional(),
  image: z
    .instanceof(File, { message: 'Product image is required.' })
    .refine((file) => file.size < 2 * 1024 * 1024, 'Image size must be less than 2MB.')
    .refine((file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), 'Only .jpg, .png, and .webp formats are supported.'),
});


export default function AddProductForm({ onFormSubmit }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTag, setCurrentTag] = useState('');

  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: '',
      category: categories[0],
      description: '',
      stock: 0,
      tags: [],
    },
    mode: 'onChange',
  });

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
    if (currentTag.trim() !== '') {
      const currentTags = form.getValues('tags') || [];
      if (!currentTags.includes(currentTag.trim())) {
        form.setValue('tags', [...currentTags, currentTag.trim()], { shouldValidate: true });
        setCurrentTag('');
      }
    }
  };
  
  const removeTag = (tagToRemove) => {
    const currentTags = form.getValues('tags') || [];
    form.setValue('tags', currentTags.filter(tag => tag !== tagToRemove), { shouldValidate: true });
  };


  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Product submitted:', data);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (onFormSubmit) {
      onFormSubmit(data);
    }

    toast.success("Success! 🎉", {
        description: "Your product has been listed successfully.",
        duration: 5000,
    });

    form.reset();
    setImagePreview(null);
    setCurrentTag('');
    setIsSubmitting(false);
  };

  return (
    <Card className="max-w-2xl mx-auto border-green-600">
      <CardHeader>
        <CardTitle className="text-2xl text-green-700">Add New Product</CardTitle>
        <CardDescription>Fill in the details below to list your product for sale.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* ... other fields like Title, Category, Description ... */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Vintage Leather Jacket" {...field} className="border-green-600 focus:ring-green-600" />
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-green-600 focus:ring-green-600">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="e.g., 49.99" {...field} className="border-green-600 focus:ring-green-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Stock Number */}
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" step="1" min="0" placeholder="e.g., 50" {...field} className="border-green-600 focus:ring-green-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your product in a few words..." rows={4} {...field} className="border-green-600 focus:ring-green-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Tags Input */}
            <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                            <div>
                                <div className="flex items-center gap-2">
                                    <Input
                                        placeholder="Add a tag..."
                                        value={currentTag}
                                        onChange={(e) => setCurrentTag(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                addTag();
                                            }
                                        }}
                                        className="border-green-600 focus:ring-green-600"
                                    />
                                    <Button type="button" onClick={addTag} className="bg-green-600 hover:bg-green-700">Add</Button>
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
                         <FormDescription>
                            Press Enter or click Add to include a tag.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <div>
                      <div className="mb-2">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Product Preview" className="w-full h-48 object-contain rounded border border-green-600" />
                        ) : (
                          <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-green-400 rounded text-green-400">Image Preview</div>
                        )}
                      </div>
                      <Input type="file" accept="image/*" onChange={handleImageChange} className="block text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
                    </div>
                  </FormControl>
                  <FormDescription>Max file size: 2MB. Supported formats: JPG, PNG, WEBP.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Listing'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}