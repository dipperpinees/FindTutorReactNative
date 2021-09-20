import { Button, Text, TextInput, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import React from 'react';

function SignInScreen() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log('submiting with ', data);
  };
  return (
    <View>
      <Controller
    name="name"
    control={control}
    render={({ onChange, value }) => (
        <TextInput
          onChangeText={(text) => onChange(text)}
          value={value}
          placeholder="Name"
        />
    )}
  />
        <Text>
          {errors?.name?.message}
        </Text>
        <Button
  onPress={handleSubmit(onSubmit)}
  title="submit"
/>
    </View>
  )
}

export default SignInScreen;