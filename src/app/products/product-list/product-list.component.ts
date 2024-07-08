import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productData:Product[] = [
      {
        "productId": "P001",
        "productName": "Laptop",
        "productCategory": "Electronics",
        "productRating": 4.5,
        "productPrice": 999.99
      },
      {
        "productId": "P002",
        "productName": "Smartphone",
        "productCategory": "Electronics",
        "productRating": 4.2,
        "productPrice": 599.99
      },
      {
        "productId": "P003",
        "productName": "Headphones",
        "productCategory": "Electronics",
        "productRating": 4.0,
        "productPrice": 99.99
      },
      {
        "productId": "P004",
        "productName": "Running Shoes",
        "productCategory": "Sports",
        "productRating": 4.7,
        "productPrice": 79.99
      },
      {
        "productId": "P005",
        "productName": "Wireless Mouse",
        "productCategory": "Electronics",
        "productRating": 4.3,
        "productPrice": 29.99
      },
      {
        "productId": "P006",
        "productName": "T-Shirt",
        "productCategory": "Clothing",
        "productRating": 4.1,
        "productPrice": 19.99
      },
      {
        "productId": "P007",
        "productName": "Coffee Maker",
        "productCategory": "Home Appliances",
        "productRating": 4.6,
        "productPrice": 129.99
      },
      {
        "productId": "P008",
        "productName": "Backpack",
        "productCategory": "Accessories",
        "productRating": 4.4,
        "productPrice": 49.99
      },
      {
        "productId": "P009",
        "productName": "Yoga Mat",
        "productCategory": "Fitness",
        "productRating": 4.8,
        "productPrice": 39.99
      },
      {
        "productId": "P010",
        "productName": "Desktop Computer",
        "productCategory": "Electronics",
        "productRating": 4.6,
        "productPrice": 1499.99
      },
      {
        "productId": "P011",
        "productName": "Sneakers",
        "productCategory": "Footwear",
        "productRating": 4.4,
        "productPrice": 89.99
      },
      {
        "productId": "P012",
        "productName": "Smart Watch",
        "productCategory": "Electronics",
        "productRating": 4.3,
        "productPrice": 199.99
      },
      {
        "productId": "P013",
        "productName": "Dumbbell Set",
        "productCategory": "Fitness",
        "productRating": 4.7,
        "productPrice": 59.99
      },
      {
        "productId": "P014",
        "productName": "Kitchen Knife Set",
        "productCategory": "Kitchenware",
        "productRating": 4.5,
        "productPrice": 49.99
      },
      {
        "productId": "P015",
        "productName": "Blender",
        "productCategory": "Home Appliances",
        "productRating": 4.2,
        "productPrice": 69.99
      },
      {
        "productId": "P016",
        "productName": "Gaming Console",
        "productCategory": "Electronics",
        "productRating": 4.7,
        "productPrice": 399.99
      },
      {
        "productId": "P017",
        "productName": "Leather Wallet",
        "productCategory": "Accessories",
        "productRating": 4.3,
        "productPrice": 29.99
      },
      {
        "productId": "P018",
        "productName": "Television",
        "productCategory": "Electronics",
        "productRating": 4.6,
        "productPrice": 799.99
      },
      {
        "productId": "P019",
        "productName": "Tennis Racket",
        "productCategory": "Sports",
        "productRating": 4.5,
        "productPrice": 129.99
      },
      {
        "productId": "P020",
        "productName": "Vacuum Cleaner",
        "productCategory": "Home Appliances",
        "productRating": 4.4,
        "productPrice": 199.99
      }
    ]

    selectedProduct!:Product;

    selectProduct(product:Product){

      this.selectedProduct = product
      console.log(this.selectedProduct)

    }
  


}
