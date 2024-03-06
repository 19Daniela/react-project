import { observer } from "mobx-react-lite";
import '@fontsource/roboto/400.css';
import serviceStore from "../store/serviceStore";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ServiceArray = observer(() => {

  return (<>
    {console.log("serviceArray")}
    {serviceStore.tempServiceDate.map((service) =>
      <div className="serviceDiv" key={service.id}>

        <Card sx={{ maxWidth: 250 ,float:"left"}} variant="outlined">
          <CardHeader title={service.name} />
          <CardContent>
            <Typography variant="p">
              {service.description} <br />
              duration: {service.duration} <br />
              price: {service.price} <AttachMoneyIcon />
            </Typography>
          </CardContent>
        </Card>
        
      </div>
    )}
  </>)
})
export default ServiceArray