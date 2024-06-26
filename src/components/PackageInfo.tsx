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
import stats from "../assets/stats.svg"

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col justify-center items-center text-center border-2 py-4">
        <FormField
          control={form.control}
          name="packagename"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-transparent text-2xl bg-clip-text  bg-gradient-to-r from-blue-500 to-purple-500 ">
                npm package name
              </FormLabel>
              <FormControl className="flex items-center justify-center">
                <Input className="text-center" placeholder="type package name" {...field} />
              </FormControl>
              <FormDescription>
                Type package name in Text Field above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex justify-center items-center gap-2" type="submit">
        <div >
            <img className="animate-bounce" src={stats} width={50} height={50} alt="stats"/>
        </div>
        <div>
           Get Stats
        </div>
        
        </Button>
      </form>
    </Form>
  </div>
  )
}

export default PackageInfo