interface IconoEmocionProps {
  nombre: string;
  size?: number;
}

const trazoComun = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function CaraBase({ children, size = 22 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...trazoComun}
    >
      <circle cx="12" cy="12" r="9.5" />
      {children}
    </svg>
  );
}

function Alegria(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <circle cx="8.7" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <path d="M7.8 14c1 1.4 2.6 2.2 4.2 2.2s3.2-.8 4.2-2.2" />
    </CaraBase>
  );
}

function Tristeza(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <circle cx="8.7" cy="10.3" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="10.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 16c1-1.3 2.6-2 4-2s3 .7 4 2" />
    </CaraBase>
  );
}

function Ira(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <path d="M7.4 9.4l2.6 1" />
      <path d="M16.6 9.4l-2.6 1" />
      <path d="M8 15.6c1.1-.9 2.6-1.4 4-1.4s2.9.5 4 1.4" />
    </CaraBase>
  );
}

function Miedo(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <circle cx="8.7" cy="10.2" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="10.2" r="1.15" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="15.6" rx="1.7" ry="2" />
    </CaraBase>
  );
}

function Calma(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <path d="M6.8 10.2c.6.5 1.3.8 1.9.8s1.3-.3 1.9-.8" />
      <path d="M13.4 10.2c.6.5 1.3.8 1.9.8s1.3-.3 1.9-.8" />
      <path d="M8.4 14.8h7.2" />
    </CaraBase>
  );
}

function Ansiedad(props: { size?: number }) {
  return (
    <CaraBase {...props}>
      <path d="M7.4 10.6h2.6" />
      <path d="M14 10.6h2.6" />
      <path d="M8.4 15.6q1.8-1.4 3.6 0t3.6 0" />
    </CaraBase>
  );
}

const iconos: Record<string, (props: { size?: number }) => React.ReactElement> = {
  Alegría: Alegria,
  Tristeza,
  Ira,
  Miedo,
  Calma,
  Ansiedad,
};

export function IconoEmocion({ nombre, size = 22 }: IconoEmocionProps) {
  const Icono = iconos[nombre];
  if (!Icono) return null;
  return <Icono size={size} />;
}
