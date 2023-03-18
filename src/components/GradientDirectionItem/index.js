// Write your code here
import {GradientButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {value, displayText, directionId} = details

  const buttonClicked = () => {
    changeDirection(value, directionId)
  }

  return (
    <ListItem>
      <GradientButton
        type="button"
        onClick={buttonClicked}
        activeCondition={isActive}
      >
        {displayText}
      </GradientButton>
    </ListItem>
  )
}

export default GradientDirectionItem
