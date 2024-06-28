import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

const formSchema = z.object({
  packagename: z.string({ required_error: "Please enter a package name" }),
})

type Props = {
  name? : string
  setName : React.Dispatch<React.SetStateAction<string>>
}

const PackageInfo = (props:Props) => {

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      packagename: "",
    },
  })

 function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    props.setName(values.packagename)
    //console.log(values)
  }

  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="packagename"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-transparent text-2xl bg-clip-text  bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 ">
                Package name
              </FormLabel>
              <FormControl>
                <Input placeholder="package" {...field} />
              </FormControl>
              <FormDescription>
                Type package name in Text Field above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </div>
  )
}

export default PackageInfo