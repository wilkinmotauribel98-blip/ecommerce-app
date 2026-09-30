import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";



export const useCheckout = create(
  persist(
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
    }),
    {name: 'user-info', storage: createJSONStorage(() => sessionStorage)},
    
  )

)