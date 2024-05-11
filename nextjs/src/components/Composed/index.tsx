import { Stack } from '@/components/Stack'
import { Cluster } from '@/components/Cluster'
import { Text } from '@/components/Text'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'

export const Composed: React.FC = () => {
  return <Stack>
    <Cluster>
      <Text>Composed</Text>
      <Text>description1</Text>
      <Text>description2</Text>
    </Cluster>
    <Stack>
      <div data-testid="inner">
        <TextField />
        <Button>Button1</Button>
      </div>
    </Stack>

    <Button>Button2</Button>
  </Stack>
}
