import BasicInput from 'apps/front/components/forms/Input';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function Chat() {
  const router = useRouter();
  const { id } = router.query;
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(id);
  return (
    <>
      <BasicInput label="frère" forwardedRef={inputRef} />
    </>
  );
}

export default Chat;
