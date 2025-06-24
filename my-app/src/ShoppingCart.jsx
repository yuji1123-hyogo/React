import React, { useReducer } from 'react';

// 商品データ
const products = [
  { id: 1, name: 'りんご', price: 150, stock: 10 },
  { id: 2, name: 'バナナ', price: 100, stock: 8 },
  { id: 3, name: 'オレンジ', price: 200, stock: 5 },
  { id: 4, name: 'ぶどう', price: 300, stock: 3 }
];

// 初期state
const initialState = {
  cart: [],        // カートの中身 [{ id, name, price, quantity }]
  total: 0,        // 合計金額
  itemCount: 0     // 商品の総数
};

// 🎯 課題: 以下のリデューサ関数を完成させてください
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // 課題1: 商品をカートに追加する機能を実装
      // - 既にカートにある商品なら数量を+1
      // - 新しい商品なら quantity: 1 で追加
      // - total（合計金額）とitemCount（総数）も更新
      
      // ここにコードを書いてください
      const existingItem = state.cart.find(item => item.id === action.product.id)

      if (existingItem){
        const updateCart = state.cart.map(item =>
            item.id === existingItem.id ? {...item, quantity: item.quantity + 1} : item
        )

        return{
            ...state,
            cart: updateCart,
            total: state.total + action.product.price,
            itemCount: state.itemCount +1
        }
      } else {
        const addedItem = {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            quantity: 1
        }
        const updateCart = [...state.cart,addedItem]

        return{
            ...state,
            cart: updateCart,
            total: state.total + action.product.price,
            itemCount: state.itemCount +1
        }
      }


    case 'REMOVE_ITEM':
      // 課題2: 商品をカートから削除する機能を実装
      // - 指定されたIDの商品をカートから完全に削除
      // - total と itemCount も更新
      
      // ここにコードを書いてください
      const removedItem = state.cart.find(item => item.id === action.id)
      const updatedCart = state.cart.filter(item => item.id !== removedItem.id)

      return {
        ...state,
        cart: updatedCart,
        total: state.total - removedItem.price * removedItem.quantity,
        itemCount: state.itemCount - removedItem.quantity
      }

    case 'INCREASE_QUANTITY':
      // 課題3: 商品の数量を+1する機能を実装
      // - 指定されたIDの商品の数量を1増やす
      // - total と itemCount も更新
      
      // ここにコードを書いてください
      const incrementedItem = state.cart.find(item => item.id === action.id)
      const incrementedCart = state.cart.map(item => item.id === incrementedItem.id ? 
        {...item, quantity: item.quantity + 1} : item)
      return {
        ...state,
        cart: incrementedCart,
        total: state.total + incrementedItem.price,
        itemCount: state.itemCount + 1
      }

    case 'DECREASE_QUANTITY': {
        const { id } = action;
        const item = state.cart.find(item => item.id === id);
        
        if (!item) return state;
        
        if (item.quantity === 1) {
            // 数量が1の場合は削除
            const updatedCart = state.cart.filter(item => item.id !== id);
            return {
            ...state,
            cart: updatedCart,
            total: state.total - item.price,
            itemCount: state.itemCount - 1
            };
        } else {
            // 数量を減らす
            const updatedCart = state.cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            return {
            ...state,
            cart: updatedCart,
            total: state.total - item.price,
            itemCount: state.itemCount - 1
            };
        }
    }

    case 'CLEAR_CART':
      // 課題5: カートを空にする機能を実装
      // - 初期stateに戻す
      
      // ここにコードを書いてください
      return {
        ...state,
        cart: [],
        total: 0,
        itemCount: 0
       };
    default:
      return state;
  }
}

// メインコンポーネント
function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 商品リスト表示
  const ProductList = () => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">商品一覧</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-gray-600">¥{product.price}</p>
            <p className="text-sm text-gray-500">在庫: {product.stock}個</p>
            <button
              onClick={() => dispatch({
                type: 'ADD_ITEM',
                product: product
              })}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              カートに追加
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // カート表示
  const CartDisplay = () => (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          ショッピングカート ({state.itemCount}個)
        </h3>
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          カートを空にする
        </button>
      </div>

      {state.cart.length === 0 ? (
        <p className="text-gray-500">カートは空です</p>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {state.cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border p-3 rounded">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 ml-2">¥{item.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch({
                      type: 'DECREASE_QUANTITY',
                      id: item.id
                    })}
                    className="px-2 py-1 bg-gray-300 rounded text-sm hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => dispatch({
                      type: 'INCREASE_QUANTITY',
                      id: item.id
                    })}
                    className="px-2 py-1 bg-gray-300 rounded text-sm hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch({
                      type: 'REMOVE_ITEM',
                      id: item.id
                    })}
                    className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 ml-2"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xl font-bold text-right">
            合計: ¥{state.total.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ショッピングカート演習
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductList />
        <CartDisplay />
      </div>

      {/* デバッグ用（開発時のみ表示） */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h4 className="font-semibold mb-2">デバッグ情報</h4>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ShoppingCart;