import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initiated } from '@/app/store/dataSlice';
import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from '@/components/ui/resizable';
import type { InitPayload } from '@app/store/dataSlice';
import Aside from '@/app/layout/Aside';
import Code from '@/app/layout/Code';
import Content from '@/app/layout/Content';

export default function Layout({ data }: { data: InitPayload }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(initiated(data));
  }, [data, dispatch]);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            className="fixed sm:static w-full"
            defaultSize={20}
            minSize={15}
            maxSize={25}
          >
            <Aside />
          </ResizablePanel>
          <ResizableHandle
            className="hidden sm:flex"
            withHandle
          />
          <ResizablePanel className="flex mt-[3.5rem] sm:mt-0">
            <Content />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle
        className="hidden sm:flex"
        withHandle
      />
      <ResizablePanel className="hidden sm:flex">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <Code source="data" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <Code source="component" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}