import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ServiceCard from "./service-card"
import Bar from "./bar"

const Services = () => {
  let services = [
    {
      id: 2,
      image: "online-pharmacy-icon.png",
      title: "Pharmacy",
      description:
        "Buy your medicines with simple and sophisticated delivery system.",
    }
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Our Services</Typography>
        <Bar />
        <Typography variant="subtitle1" style={{ margin: 30 }}>
          We provide to you the best choices for you. 
        </Typography>
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Grid>
    </Grid>
  )
}
export default Services
