import { Steps } from 'antd'
import * as React from 'react'

import {
  StepContent,
  FlexContainer,
  ImagePeopleDoc,
  DivContainerForm,
  DivContainerFormLogo
} from 'src/styles'

// hooks redux
import LogoImg from 'src/assets/logo.svg'
import { useAppSelector } from 'src/redux/hooks'
import { RenderElement } from './FormComponents/render'

const { Step } = Steps

export const FormNuevaReparacion: React.FC = React.memo(() => {
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
              <h2>MANTENIMIENTO</h2>
            </DivContainerFormLogo>
            {<RenderElement keyElement={current} />}
          </DivContainerForm>
        </StepContent>
      </FlexContainer>
    </>
  )
})
