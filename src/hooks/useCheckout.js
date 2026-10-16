import { create } from "zustand";
import { useCart } from "./useCart";


const restartClientStorage = useCart.getState().restartClientStorage;

export const useCheckout = create(
      (set) => ({
      shippingForm: {},
      paymentForm: {},
      isShippingFormFulfilled: false,
      isPaymentFormFulfilled: false,
      isReviewed: false,
      isDone: false,
      orderNumber: null,
      setOrderNumber: (id) => set({orderNumber: id}),
      onShippingFormSubmit: (data)=> set({shippingForm: data, isShippingFormFulfilled: true}),
      onPaymentFormSubmit: (data) => set({paymentForm: data, isPaymentFormFulfilled: true}),
      setIsReviewed: () => set({isReviewed: true}),
      setIsDone: (value) => set({isDone: value}),
      setIsPaymentFormFulfilled: (value) => set({isPaymentFormFulfilled: value}),
      placeOrder: ()=>{
        restartClientStorage();
        set({shippingForm: {}, paymentForm: {}, isDone: true})
      } ,
      restartAll: ()=>{
        set({shippingForm: {}, paymentForm: {}, isDone: false, isReviewed: false, isPaymentFormFulfilled: false, isShippingFormFulfilled: false, orderNumber: null})
      }
    })
    
    

)