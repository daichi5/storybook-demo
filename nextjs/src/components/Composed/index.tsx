import { Stack } from '@/components/Stack'
import { Cluster } from '@/components/Cluster'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'

type Props = {
  callback: () => void
  options?: boolean
}

export const Composed: React.FC<Props> = ({ callback, options }) => {
  const handleClick = () => {
    if (options) {
      console.log('options')
    }
  }


  return <Stack>
    <Cluster>
      <Text>current date is {new Date().getDate()}</Text>
    </Cluster>
    <Cluster>
      <Text>Composed</Text>
      <Text>description1</Text>
    </Cluster>
    <Stack>
      <div data-testid="inner">
        <TextField />
        <Button>Button1</Button>
      </div>
    </Stack>

    <button onClick={handleClick}>Button3</button>

    <Button onClick={callback}>Button2</Button>
  </Stack>
}
