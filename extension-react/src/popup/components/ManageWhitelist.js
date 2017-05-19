import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export default ({
  whitelist = [],
  onChange
}: {
  whitelist?: string[],
  onChange: (event: Event, data: {}) => void
}) => {
  return (
    <Form>
      <Form.Field
        control={TextArea}
        rows={4}
        value={whitelist.join('\n')}
        onChange={onChange}
      />
    </Form>
  )
}
