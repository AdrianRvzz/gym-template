import { Container, Accordion, Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import Layout from "../components/Layout";
import { GymSchedule, ironfortSchedule, titaniumArenaSchedule, thunderdomeSchedule, times, days } from "../utils/schedules";

interface ScheduleProps {
  route: string;
}

const routeToSchedules: { [key: string]: GymSchedule } = {
  ironfort: ironfortSchedule,
  titaniumarena: titaniumArenaSchedule,
  thunderdome: thunderdomeSchedule
};
function SchedulesPage({ route }: ScheduleProps): React.JSX.Element {
  const schedule = routeToSchedules[route];


  return (
    <Layout 
      children={
        <Container className="schedulesContainer ">
        <h1 className="text-center py-3">Branch {route.toUpperCase()}</h1>

        
          <Table striped bordered  responsive variant="dark">
            <thead>
              <tr>
              <th>Hour</th>
              {days.map((day) => (
                <th key={day} className="text-center">
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </th>
              ))}
              </tr>
            </thead>
            <tbody>
            {times.map((time) => (
              <tr key={time}>
                <td>{time}</td>
                {days.map(
                  (day) => {
                    const cls = schedule[day]?.find(
                      (c) => c.start_time === time
                    );
                    return (
                      <td className="p-2 text-center" key={day}>
                        {cls ? (
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="tooltip-disabled">{cls?.difficulty}</Tooltip>}
                          >
                            <div>
                              <strong>{cls.class_name}</strong>
                              <br />
                              {cls.start_time} - {cls.end_time}
                            </div>
                          </OverlayTrigger>
                        ) : (
                          <></>
                        )}
                      </td>
                    );

                  }
                )}
              </tr>
            ))}
            </tbody>
          </Table>
   
      </Container>
      }>

    </Layout>
 
  );
}

export default SchedulesPage;
