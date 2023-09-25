/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function Address(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="402px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Address")}
      {...rest}
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
          placeholder="Address"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38554450")}
        ></TextField>
      </Flex>
      <Flex
        gap="26px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="130px"
        left="103px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 44038554457")}
      >
        <TextField
          width="300px"
          height="unset"
          placeholder="City"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38554458")}
        ></TextField>
      </Flex>
      <Flex
        gap="26px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="206px"
        left="103px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 44038554465")}
      >
        <TextField
          width="300px"
          height="unset"
          placeholder="State"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField38554466")}
        ></TextField>
      </Flex>
      <SelectField
        width="300px"
        height="unset"
        placeholder="Country"
        position="absolute"
        top="280px"
        left="103px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </View>
  );
}
