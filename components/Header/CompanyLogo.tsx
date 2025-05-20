import Image from 'next/image';

export const CompanyLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/images/company-logo.png" alt="Logo" width={48} height={48} />
      <span className="text-xl font-bold">Nova</span>
    </div>
  );
};
