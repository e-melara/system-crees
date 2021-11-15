import { Steps } from 'antd'
import * as React from 'react'

import {
  StepContent,
  FlexContainer,
  ImagePeopleDoc,
  DivContainerForm,
  DivContainerFormLogo
} from '../styles'

// hooks redux
import LogoImg from '../assets/logo.svg'
import { useAppSelector } from '../redux/hooks'
import { RenderElement } from '../components/FormComponents/render'

const { Step } = Steps

export const FormularioPage: React.FC = React.memo(() => {
  const { current, items, estado } = useAppSelector((state) => state.steps)
  return (
    <>
      <FlexContainer>
        <div className="content-navigation">
          <ImagePeopleDoc>
            <img src={LogoImg} alt="imgs for logo" />
          </ImagePeopleDoc>
          <Steps
            type="default"
            status={estado}
            current={current}
            direction="vertical"
          >
            {items.map((e) => (
              <Step title={e.title} description={e.description} key={e.title} />
            ))}
          </Steps>
        </div>
        <StepContent>
          <DivContainerForm>
            <DivContainerFormLogo>
              <h2>NUEVA REPARACION</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente quas nihil aperiam dolores corrupti vitae a
                perspiciatis nisi nobis! Fugit necessitatibus minima in aliquam
                facere harum consequatur, quis commodi magnam.
              </p>
            </DivContainerFormLogo>
            {<RenderElement keyElement={current} />}
          </DivContainerForm>
        </StepContent>
      </FlexContainer>
    </>
  )
})
