import {Component} from 'react'

import {
  Heading,
  AppContainer,
  FormContainer,
  Input,
  Label,
  Select,
  CustomButton,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedFontSize: fontSizesOptionsList[0].optionId,
    isClicked: false,
  }

  onChangeFontSize = event => {
    this.setState({selectedFontSize: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmitShowImage = event => {
    event.preventDefault()
    this.setState({isClicked: true})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  render() {
    const {
      selectedFontSize,
      isClicked,
      imageUrl,
      topText,
      bottomText,
    } = this.state
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitShowImage}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image-url-input">Image Url</Label>
          <Input
            id="image-url-input"
            placeholder="Enter the Image Url"
            onChange={this.onChangeImageUrl}
          />
          <Label htmlFor="top-text-input">Top Text</Label>
          <Input
            id="top-text-input"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />
          <Label htmlFor="bottom-text-input">Bottom Text</Label>
          <Input
            id="bottom-text-input"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />
          <Label htmlFor="font-size-input">Font Size</Label>
          <Select
            id="font-size-input"
            onChange={this.onChangeFontSize}
            value={selectedFontSize}
          >
            {fontSizesOptionsList.map(eachFontSize => (
              <option key={eachFontSize.optionId} value={eachFontSize.optionId}>
                {eachFontSize.displayText}
              </option>
            ))}
          </Select>
          <CustomButton type="submit">Generate</CustomButton>
        </FormContainer>
        {isClicked && (
          <MemeContainer imageLink={imageUrl} data-testid="meme">
            <Text fontSize={selectedFontSize}>{topText}</Text>
            <Text fontSize={selectedFontSize}>{bottomText}</Text>
          </MemeContainer>
        )}
      </AppContainer>
    )
  }
}

export default MemeGenerator
