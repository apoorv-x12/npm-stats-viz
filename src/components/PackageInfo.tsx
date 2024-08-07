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
  setName : React.Dispatch<React.SetStateAction<string>>,
  effect? : JSX.Element,
  note? : string,
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
  }
   
  return (
    <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col justify-center items-center text-center border-2 p-4 dark:bg-gradient-to-r dark:from-dark-bgb dark:via-card-dark-blue dark:to-dark-bgb sm:bg-gradient-to-r sm:from-blue-100 sm:via-card-light-blue sm:to-blue-100 bg-blue-200 rounded-md ">
        <FormField
          control={form.control}
          name="packagename"
          render={({ field }) => (
            <FormItem>
              <FormLabel >
                <div className="border bg-white dark:bg-black border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative rounded-lg h-[10rem]">
                  {props.effect}
                </div>
              </FormLabel>
              <FormControl className="flex items-center justify-center">
                <Input className="text-center" placeholder="type package name" {...field} />
              </FormControl>
              <FormDescription className="text-black dark:text-yellow-50">
                <div>
                  { props?.note?.split('BREAK')[0] }
                </div>
                <div className="font-semibold">
                  { props?.note?.split('BREAK')[1] }
                </div>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
         className="flex justify-center items-center gap-2"
         style={{ 
            borderRadius: '50%',
            marginTop: '8vh',
            marginBottom: '4vh',
            backgroundImage: `
                linear-gradient(to bottom, rgba(255, 242, 9, 0.5), transparent 50%, transparent 90%,rgba(255, 5, 150, 0.5) ), 
                repeating-linear-gradient(60deg, rgba(255, 12, 19, 0.8) 0, rgba(255, 12, 19, 0.8) 10px , transparent 10px, transparent 20px, rgba(255, 5, 180, 0.5) 20px), 
                linear-gradient(to bottom,  rgba(255, 1, 203, 0.8), rgba(255, 242, 9, 0.5))
              `,
            boxShadow: "0px 4px 0px rgba(255, 50, 199, 0.5) ,0px 5px 0px rgba(1, 1, 1, 1),0px 4px 0px 8px rgba(255, 255, 192, 1),0px 4px 30px 20px rgba(255, 2, 25, 0.7)",
          }}
         type="submit"
        >
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