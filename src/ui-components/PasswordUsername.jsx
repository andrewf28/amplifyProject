/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, PasswordField, TextField, View } from "@aws-amplify/ui-react";
export default function PasswordUsername(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PasswordUsername")}
      {...rest}
    >
      <View
        width="505px"
        height="229px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Flex
          gap="26px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="56px"
          left="103px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 439")}
        >
          <TextField
            width="300px"
            height="unset"
            placeholder="Email"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
        </Flex>
        <PasswordField
          width="300px"
          height="unset"
          placeholder="Password"
          position="absolute"
          top="129px"
          left="103px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
      </View>
    </Flex>
  );
}
