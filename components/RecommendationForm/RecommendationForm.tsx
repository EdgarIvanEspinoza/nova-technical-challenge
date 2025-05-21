'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type FormValues = {
  recommendation: string;
};

export const RecommendationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Submitted recommendation:', data.recommendation);
    // Aquí puedes enviar el dato a una API o DB
    reset();
  };

  return (
    <Card className="w-full max-h-80 mx-auto p-4 bg-white rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 h-full"
      >
        <CardHeader>
          <h2 className="text-xl font-semibold">Recommendations</h2>
        </CardHeader>
        <CardContent>
          <textarea
            className={`w-full h-40 p-2 border rounded resize-none ${
              errors.recommendation ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Write your recommendation here..."
            {...register('recommendation', {
              required: 'This field is required',
              minLength: {
                value: 50,
                message: 'Minimum 50 characters required',
              },
            })}
          ></textarea>
          {errors.recommendation && (
            <p className="text-sm text-red-500 mt-1">
              {errors.recommendation.message}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex gap-4 flex-row-reverse">
          <Button type="submit" disabled={isSubmitting}>
            Submit Recommendation
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
