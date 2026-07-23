import type { Device } from '@/lib/projects';

/**
 * Pure-CSS device mockups shown until real exported images are dropped into
 * public/projects/. They give each card a finished, "designed" look instead of
 * an empty placeholder.
 */
export default function DeviceMock({
  device,
  screen,
  label,
}: {
  device: Device;
  screen: string;
  label: string;
}) {
  if (device === 'laptop') {
    return (
      <div className="mock mock--laptop" role="img" aria-label={label}>
        <div className="mock__laptop-screen">
          <span className="mock__ui" style={{ background: screen }}>
            <span className="mock__bar" />
            <span className="mock__grid">
              <i /><i /><i /><i /><i /><i />
            </span>
          </span>
        </div>
        <div className="mock__laptop-base" />
      </div>
    );
  }

  if (device === 'tablet') {
    return (
      <div className="mock mock--tablet" role="img" aria-label={label}>
        <span className="mock__ui" style={{ background: screen }}>
          <span className="mock__bar" />
          <span className="mock__rows">
            <i /><i /><i />
          </span>
        </span>
      </div>
    );
  }

  if (device === 'phones') {
    return (
      <div className="mock mock--phones" role="img" aria-label={label}>
        <div className="mock mock--phone mock--phone-back">
          <span className="mock__ui" style={{ background: screen }} />
        </div>
        <div className="mock mock--phone mock--phone-front">
          <span className="mock__notch" />
          <span className="mock__ui" style={{ background: screen }}>
            <span className="mock__pill" />
            <span className="mock__pill mock__pill--sm" />
          </span>
        </div>
      </div>
    );
  }

  // single phone
  return (
    <div className="mock mock--phone" role="img" aria-label={label}>
      <span className="mock__notch" />
      <span className="mock__ui" style={{ background: screen }}>
        <span className="mock__pill" />
        <span className="mock__pill mock__pill--sm" />
      </span>
    </div>
  );
}
