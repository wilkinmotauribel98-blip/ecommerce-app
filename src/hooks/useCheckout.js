import { create } from "zustand";



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
    }),
    

)