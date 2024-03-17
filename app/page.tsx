import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex flex-col max-w-[200px] gap-y-4 p-4'>
      <Button>Default</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='primaryOutline'>Primary Outline</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='secondaryOutline'>Secondary</Button>
      <Button variant='danger'>Secondary Outline</Button>
      <Button variant='dangerOutline'>Secondary Outline</Button>
    </div>
  );
}
