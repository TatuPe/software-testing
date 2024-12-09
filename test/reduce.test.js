import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce function tests', () => {

    describe('Calculating Total Price in Shopping Cart', () => {
        it('should calculate the total price of items in the cart', () => {
            const cart = [
                { price: 100, quantity: 2 },
                { price: 50, quantity: 1 },
                { price: 200, quantity: 3 }
            ];

            const totalPrice = reduce(cart, (total, item) => total + item.price * item.quantity, 0);

            expect(totalPrice).to.equal(950);
        });
    });

    describe('Grouping Products by Category', () => {
        it('should group products by category', () => {
            const products = [
                { name: 'Shirt', category: 'Clothing' },
                { name: 'Shoes', category: 'Footwear' },
                { name: 'Jeans', category: 'Clothing' },
                { name: 'Hat', category: 'Accessories' }
            ];

            const groupedProducts = reduce(products, (acc, product) => {
                if (!acc[product.category]) {
                    acc[product.category] = [];
                }
                acc[product.category].push(product);
                return acc;
            }, {});

            expect(groupedProducts).to.deep.equal({
                Clothing: [
                    { name: 'Shirt', category: 'Clothing' },
                    { name: 'Jeans', category: 'Clothing' }
                ],
                Footwear: [
                    { name: 'Shoes', category: 'Footwear' }
                ],
                Accessories: [
                    { name: 'Hat', category: 'Accessories' }
                ]
            });
        });
    });

    describe('Applying Discounts to Shopping Cart', () => {
        it('should calculate the total discount for all items in the cart', () => {
            const cart = [
                { price: 100, discount: 0.1 },
                { price: 50, discount: 0.2 },
                { price: 200, discount: 0.05 }
            ];

            const totalDiscount = reduce(cart, (total, item) => total + (item.price * item.discount), 0);

            expect(totalDiscount).to.equal(45);
        });
    });

    describe('Counting Product Popularity', () => {
        it('should track how many times each product is ordered', () => {
            const orders = [
                { productId: 1 },
                { productId: 2 },
                { productId: 1 },
                { productId: 3 },
                { productId: 1 }
            ];

            const productCounts = reduce(orders, (counts, order) => {
                counts[order.productId] = (counts[order.productId] || 0) + 1;
                return counts;
            }, {});

            expect(productCounts).to.deep.equal({ '1': 3, '2': 1, '3': 1 });
        });
    });

});
