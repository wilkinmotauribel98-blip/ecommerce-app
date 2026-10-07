import { create  } from "zustand";
import { useCart } from "./useCart";


const restartClientStorage = useCart.getState().restartClientStorage;

export const useCheckout = create(
    (set) => ({
      shippingForm: {},
      paymentForm: {},
      isSaved: false,
      isShippingFormFullFiled: false,
      isPaymentFormFullFiled: false,
      isReviewed: false,
      isDone: false,
      orderNumber: null,
      setOrderNumber: (id) => set({orderNumber: id}),
      onShippingFormSubmit: (data)=> set({shippingForm: data, isSaved: true, isShippingFormFullFiled: true}),
      onPaymentFormSubmit: (data) => set({paymentForm: data, isPaymentFormFullFiled: true}),
      setIsReviewed: () => set({isReviewed: true}),
      setIsDone: (value) => set({isDone: value}),
      setIsPaymentFormFullFiled: (value) => set({isPaymentFormFullFiled: value}),
      placeOrder: ()=>{
        restartClientStorage();
        set({shippingForm: {}, paymentForm: {}, isDone: true})
      } ,
      restartAll: ()=>{
        set({shippingForm: {}, paymentForm: {}, isDone: false, isReviewed: false, isPaymentFormFullFiled: false, isShippingFormFullFiled: false, isSaved: false, orderNumber: null})
      }
    }),
    

)