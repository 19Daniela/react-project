import { observer } from "mobx-react-lite";
import '@fontsource/roboto/400.css';
import serviceStore from "../store/serviceStore";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ServiceArray = observer(() => {

  return(<>
    {console.log("serviceArray")}
    {serviceStore.tempServiceDate.map((service) =>
      <div className="serviceDiv" key={service.id} style={{float:"left", display:'inline-block'}}>

        <Card sx={{ width: 250, height:250,float:"left", border:1, margin:1.5, display:"inline-block"}} variant="outlined">
          <CardHeader title={service.name} sx={{color: 'gray'}}/>
          <CardContent>
            <Typography variant="p">
              {service.description} <br />
              duration: {service.duration} <br />
              price: {service.price} <AttachMoneyIcon />
           { console.log(service.id)}
            </Typography>
          </CardContent>
        </Card>
        
      </div>
    )}
  </> )
})
export default ServiceArray