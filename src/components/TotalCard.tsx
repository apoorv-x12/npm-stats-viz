type Props = {
    name : string,
    createdOn : string,
    totalDownloads : number,
    downloadsEndDate : string,
    downloadsStartDate : string
}
const TotalCard = (props: Props) => {
  return (
    <div className="flex flex-col p-2 justify-center items-center border-2 dark:bg-dark-bgb bg-yellow-100 dark:text-yellow-100 text-blue-950 rounded-lg">
        <h1 className='mb-2 font-bold'>Package Stats for last 18 months</h1>
        <div className="flex gap-8 justify-center items-center m-4 p-2">
            <div className="flex flex-col justify-center items-center gap-1">
               <div>Package Name: </div>  <b> {props.name} </b> 
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
               <div>Created on:  </div>  <b> {props.createdOn} </b>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
               <div>Total Downloads: </div>  <b> {props.totalDownloads} </b>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
               <div>End Date of downloads: </div>  <b> {props.downloadsEndDate} </b>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
               <div>Start Date of downloads: </div>  <b> {props.downloadsStartDate} </b>
            </div>
        </div>
        <p className="mt-2 font-medium">
                Note: Official npmjs API can only return downloads in range of atmost last 18 months from today
        </p>
    </div>
  )
}

export default TotalCard