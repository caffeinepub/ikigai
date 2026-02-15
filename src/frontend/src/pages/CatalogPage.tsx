import { useState, useMemo } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '../components/catalog/ProductCard';
import { products, categories } from '../data/products';

export default function CatalogPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { category?: string };
  
  const [selectedFilter, setSelectedFilter] = useState<string>(
    search.category === 'equipment' || search.category === 'apparel' 
      ? search.category 
      : categories.find(c => c.id === search.category)?.type || 'all'
  );

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') return products;
    if (selectedFilter === 'equipment') {
      return products.filter(p => 
        ['yoga-mats', 'resistance-bands', 'mobility-tools'].includes(p.category)
      );
    }
    if (selectedFilter === 'apparel') {
      return products.filter(p => 
        ['training-tops', 'training-bottoms'].includes(p.category)
      );
    }
    return products.filter(p => p.category === selectedFilter);
  }, [selectedFilter]);

  const groupedProducts = useMemo(() => {
    const groups: Record<string, typeof products> = {};
    filteredProducts.forEach(product => {
      if (!groups[product.categoryLabel]) {
        groups[product.categoryLabel] = [];
      }
      groups[product.categoryLabel].push(product);
    });
    return groups;
  }, [filteredProducts]);

  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Shop</h1>
          <p className="text-muted-foreground max-w-2xl">
            Premium equipment and performance apparel for disciplined training
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="apparel">Apparel</TabsTrigger>
            <TabsTrigger value="yoga-mats" className="hidden md:inline-flex">Mats</TabsTrigger>
            <TabsTrigger value="resistance-bands" className="hidden md:inline-flex">Bands</TabsTrigger>
            <TabsTrigger value="mobility-tools" className="hidden md:inline-flex">Mobility</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Products Grid */}
        <div className="space-y-12">
          {Object.entries(groupedProducts).map(([categoryLabel, categoryProducts]) => (
            <div key={categoryLabel} className="space-y-6">
              <h2 className="text-2xl font-medium tracking-tight">{categoryLabel}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
