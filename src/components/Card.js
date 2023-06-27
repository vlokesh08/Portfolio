import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
  } from "@heroicons/react/24/solid";
   
  export default function Example(props) {
    return (
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={props.project.imageUrl}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {props.project.title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-3">
            <a href={props.project.proLink}>
            <Button size="lg" fullWidth={true}>
                Link
            </Button>
          </a>
        </CardFooter>
      </Card>
    );
  }