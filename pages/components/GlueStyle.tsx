import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styled} from '@gluestack-style/react';

//这部分内容在Mine中使用
export const StyledButtonVariant = styled(
  Pressable,
  {
    p: '$3',
    rounded: '$md',
    variants: {
      //多个变量，这里可以直接使用key=value
      variant: {
        solid: {
          bg: '$primary600',
        },
        subtle: {
          bg: '$primary200',
          _text: {
            color: '$textDark600',
          },
        },
      },
      //同上
      size: {
        xs: {
          px: '$3',
          py: '$2',
        },
        sm: {
          px: '$3.5',
          py: '$2.5',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  },
);
export const StyledButtonText = styled(
  Text,
  {
    // color: '$textDark50',
    // color: 'white',
    color: '$rose50',
    fontWeight: '400',
  },
  {ancestorStyle: ['_text']},
);
