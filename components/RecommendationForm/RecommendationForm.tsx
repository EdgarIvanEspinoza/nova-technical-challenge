'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { useState } from 'react';

type FormValues = {
  recommendation: string;
};

export const RecommendationForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    console.log('Submitted recommendation:', data.recommendation);
    await new Promise((res) => setTimeout(res, 3000)); // simulate 3s delay
    reset();
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <Card className="w-full max-h-80 mx-auto p-4 bg-white rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 h-full"
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
              onKeyDown={handleKeyDown}
            />
            {errors.recommendation ? (
              <p className="text-sm text-red-500 mt-1">
                {errors.recommendation.message}
              </p>
            ) : (
              <p className="text-sm text-grey-500 mt-1">
                {'Minimum 50 characters required'}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Recommendation'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};
