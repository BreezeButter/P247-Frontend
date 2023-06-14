// import { LoaderIcon } from '../icons';

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-secondary opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center min-h-full">
          <span className="loading loading-spinner text-primary "></span>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}
