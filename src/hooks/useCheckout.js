import { create } from "zustand";
import { persist } from "zustand/middleware";



export const useCheckout = create(
  persist(
    (set, get) => ({
      shippingForm: {},
      paymentForm: {},
      isSaved: false,
      isShippingFormFullFiled: false,
      isPaymentFormFullFiled: false,
      isReviewed: false,
      isDone: false,
      onShippingFormSubmit: (data)=> set({shippingForm: data, isSaved: true, isShippingFormFullFiled: true}),
      onPaymentFormSubmit: (data) => set({paymentForm: data, isPaymentFormFullFiled: true})
    }),
    {name: 'shipping-form'}
  )
)