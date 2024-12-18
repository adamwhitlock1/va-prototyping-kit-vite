import { VadsButton } from "../components/VadsExamples/Button"
import { VadsAccordion } from "../components/VadsExamples/Accordion"
import { VadsAlert } from "../components/VadsExamples/Alert"
import { VadsCard } from "../components/VadsExamples/Card"
import { VadsProcessList } from "../components/VadsExamples/ProcessList"

export const Components = () => {
  return (
    <div>
      <h1>Components</h1>
      <p>All current VADS component library assets are available</p>

      <div className="vads-u-padding--2 vads-u-border--1px vads-u-border-color--primary-alt-lightest">
        <h2 className="vads-u-margin-y--0p5">Examples:</h2>

        <VadsAccordion />

        <VadsButton />

        <VadsAlert />

        <VadsCard />

        <VadsProcessList />
      </div>
    </div>

  )
}