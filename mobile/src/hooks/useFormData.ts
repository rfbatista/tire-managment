import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFormData = ({ defaultValues }: any) => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });
  return [control, handleSubmit, formState];
};
