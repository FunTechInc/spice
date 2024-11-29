import { Input } from "./components/item/Input";
import { Select } from "./components/item/Select";
import { FieldLayout } from "./components/FieldLayout";
import { Textarea } from "./components/item/Textarea";

export type SelectProps = {
   isSelect?: { defaultSelectedIndex?: number; options: string[] };
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type TextareaProps = {
   isTextarea?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type OptionLabel = {
   optionLabel?: React.ReactNode;
};

export type FormProps = React.InputHTMLAttributes<HTMLInputElement> &
   SelectProps &
   TextareaProps &
   OptionLabel;

export type FormFieldsProps = {
   label?: string | React.ReactNode;
   /**  param formProps If you set two in an array, they will be arranged as flex. For select and textarea, set tag attributes to isSelect and isTextarea, respectively. */
   formProps: FormProps[] | FormProps;
   /** React.ReactNode[] for validation */
   errors?: React.ReactNode[] | React.ReactNode;
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

/**
 *
 * ```jsx
 * <FormField
		className={s.field}
		label="Mail"
		formProps={{
			type: "email",
			id: "e-mail",
			placeholder: "t.hashimoto@funtech.inc",
			...register("email", {
				required: VALIDATION.required,
				pattern: {
					value: VALIDATION.emailRegExp,
					message: VALIDATION.email,
				},
			}),
		}}
		errors={<Error error={errors?.email?.message || ""} />}
	/>
```
 */
export const FormField = ({
   label,
   formProps,
   errors,
   ...rest
}: FormFieldsProps) => {
   if (errors && Array.isArray(errors) && errors.length > 2) {
      throw new Error("The length of error is up to 2.");
   }

   const formPropsArr = Array.isArray(formProps) ? formProps : [formProps];

   const { type, isSelect, isTextarea } = formPropsArr[0];
   const propsLength = formPropsArr.length;

   if (!(type === "radio" || type === "checkbox") && propsLength > 2) {
      throw new Error("The length of formProps is up to 2.");
   }

   const layoutType = ["radio", "checkbox"].includes(type || "")
      ? "radio-check"
      : propsLength === 1
      ? "block"
      : "flex";

   return (
      <fieldset {...rest}>
         <FieldLayout
            layoutType={layoutType}
            formPropsArr={formPropsArr}
            label={label}
            errors={errors}
            FormItem={isSelect ? Select : isTextarea ? Textarea : Input}
         />
      </fieldset>
   );
};
