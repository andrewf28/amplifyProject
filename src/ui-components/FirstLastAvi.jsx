/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function FirstLastAvi(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="385px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FirstLastAvi")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        placeholder="First name"
        position="absolute"
        top="218px"
        left="103px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField38554483")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        placeholder="Last name"
        position="absolute"
        top="296px"
        left="103px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField38554490")}
      ></TextField>
      <Image
        width="96px"
        height="96px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48px"
        left="205px"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(128,128,128,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="230px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="151px"
        left="138px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Upload Profile Picture"
        {...getOverrideProps(overrides, "Upload Profile Picture")}
      ></Text>
    </View>
  );
}
