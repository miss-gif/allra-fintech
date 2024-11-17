'use client'

import { use } from 'react'
import { useProduct } from '@/app/products/[id]/hooks/use-product'

export interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

//TODO: 제품 상세 페이지를 보여줍니다.

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params)

  const { data: product, isLoading, error } = useProduct(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    throw new Error(error.message)
  }

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="w-full overflow-hidden md:flex">
      <div className="w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </div>
          <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">
            {product.discountPercentage}% Off
          </span>
        </div>
        <div className="mt-3">
          <span
            className={`inline-block rounded-full px-2 py-1 text-xs ${
              product.availabilityStatus === 'Low Stock'
                ? 'bg-red-100 text-red-600'
                : 'bg-green-100 text-green-600'
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold text-gray-700">Tags:</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold text-gray-700">Rating:</h3>
          <div className="mt-1 flex items-center">
            <span className="text-lg text-yellow-400">★</span>
            <span className="ml-1 text-gray-800">{product.rating}</span>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold text-gray-700">Reviews:</h3>
          <ul className="mt-2 space-y-2">
            {product.reviews.slice(0, 2).map((review, index) => (
              <li
                key={index}
                className="rounded-lg border border-gray-100 bg-gray-50 p-2 text-xs text-gray-600"
              >
                <strong>{review.reviewerName}</strong>: {review.comment}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
