import * as React from 'react';
import { Button, Spinner } from 'native-base';
export interface ISendButton {
  mutationResult: any;
  onPress: (send: any) => void;
  label: string;
}

export const SendButton: React.FC<ISendButton> = ({
  mutationResult,
  onPress,
  label,
}) => {
  return (
    <>
      <Button
        mt='2'
        colorScheme={mutationResult.isLoading ? 'dark' : 'indigo'}
        onPress={onPress}
        isDisabled={mutationResult.isLoading}
      >
        {mutationResult.isLoading ? <Spinner color='indigo.700' /> : label}
      </Button>
    </>
  );
};
