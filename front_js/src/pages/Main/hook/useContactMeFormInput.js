import { useController, useFormContext } from 'react-hook-form';

export const useContactMeFormInput = () => {
  const formContextApi = useFormContext();

  const nameController = useController({
    formContextApi,
    name: 'name',
    rules: {
      required: true,
      maxLength: {
        value: 10,
        message: '이름은 10자 이하로 입력해주세요.',
      },
    },
  });

  const emailController = useController({
    formContextApi,
    name: 'email',
    rules: {
      required: true,
      maxLength: {
        value: 50,
        message: '이메일은 50자 이하로 입력해주세요.',
      },
    },
  });

  const addressController = useController({
    formContextApi,
    name: 'address',
    rules: {
      required: true,
      maxLength: {
        value: 50,
        message: '주소는 50자 이하로 입력해주세요.',
      },
    },
  });

  const detailController = useController({
    formContextApi,
    name: 'detail',
    rules: {
      required: true,
      maxLength: {
        value: 50,
        message: '상세 주소는 50자 이하로 입력해주세요.',
      },
    },
  });

  const messageController = useController({
    formContextApi,
    name: 'message',
    rules: {
      required: true,
      maxLength: {
        value: 50,
        message: '메세지는 50자 이하로 입력해주세요.',
      },
    },
  });

  return {
    nameField: {
      value: nameController.field.value,
      onChange: nameController.field.onChange,
      error: nameController.fieldState.error,
    },
    emailField: {
      value: emailController.field.value,
      onChange: emailController.field.onChange,
      error: emailController.fieldState.error,
    },
    addressField: {
      control: addressController.control,
      value: addressController.field.value,
      onChange: addressController.field.onChange,
      error: addressController.fieldState.error,
    },
    detailField: {
      value: detailController.field.value,
      onChange: detailController.field.onChange,
      error: detailController.fieldState.error,
    },
    messageField: {
      value: messageController.field.value,
      onChange: messageController.field.onChange,
      error: messageController.fieldState.error,
    },
  };
};
