import React, { createContext, useContext, useMemo, useState } from 'react';

// 初期データ
const products = [
  { id: 1, name: 'iPhone', price: 100000, image: '📱' },
  { id: 2, name: 'MacBook', price: 200000, image: '💻' },
  { id: 3, name: 'AirPods', price: 30000, image: '🎧' },
  { id: 4, name: 'iPad', price: 80000, image: '📱' },
];

// TODO: CartContextを作成してください
const CartContext = createContext()

// TODO: useCartカスタムフックを作成してください
// useContextをカスタムフックでラップする理由
    //名前から何のコンテキストかわかりやすい
    //コンテキスト提供外の誤った個所での利用を防げる
const useCart = () => {
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCartはCartProvider内で使用してください')
    }
    return context
}

// TODO: CartProviderコンポーネントを作成してください

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    //カートへの追加
    const addToCart = (product) =>{
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if(existingItem){
                return prevItems.map(item =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            } else {
                return [...prevItems, {...product, quantity: 1}]
            }
        })
    }

    const cartStats = useMemo(()=>{
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
        const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

        return { totalItems, totalPrice }
    },[cartItems])

    //提供するContextを一か所にまとめる
    const contextValue = useMemo(()=>({
        cartItems,
        addToCart,
        totalItems: cartStats.totalItems,
        totalPrice: cartStats.totalPrice
    }),[cartItems, cartStats.totalItems, cartStats.totalPrice])

    return (
        <CartContext.Provider value={contextValue} >
            {children}
        </CartContext.Provider>
    )
}






function Header() {
  // TODO: カートの商品数を表示
  const { totalItems } = useCart();

  return (
    <div className="bg-blue-500 text-white p-4 mb-4">
      <h1 className="text-xl font-bold">🛒 カート ({ totalItems })</h1>
    </div>
  );
}

function ProductCard({ product }) {
  // TODO: カートに追加する機能を実装
  const { addToCart } = useCart();
  return (
    <div className="border rounded p-4 m-2 bg-white shadow">
      <div className="text-2xl mb-2">{product.image}</div>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">¥{product.price.toLocaleString()}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        カートに追加
      </button>
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">商品一覧</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Cart() {
  // TODO: カートの中身を表示
  const { cartItems, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">カートの中身</h2>
        <div className="border rounded p-4 bg-gray-50">
          <p className="text-gray-500">カートは空です</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold mb-4">カートの中身</h2>
      <div className="border rounded p-4 bg-gray-50">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b">
            <div className="flex items-center">
              <span className="text-xl mr-2">{item.image}</span>
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600 ml-2">
                  ¥{item.price.toLocaleString()} × {item.quantity}個
                </span>
              </div>
            </div>
            <div className="font-bold">
              ¥{(item.price * item.quantity).toLocaleString()}
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-xl font-bold">
            <span>合計:</span>
            <span>¥{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContextPractice() {

  
  return (
    // TODO: CartProviderでラップ
    <CartProvider>
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4">
                <ProductList />
                <Cart />
            </div>
        </div>
    </CartProvider>
  );
}

export default ContextPractice;