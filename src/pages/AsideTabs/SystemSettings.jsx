import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../redux/appSlice";
import IconDB from '../../assets/DataBaseIcon.svg?react';
import IconHistory from '../../assets/HistoryIcon.svg?react';
import IconLock from '../../assets/LockIcon.svg?react';
import IconBell from '../../assets/BellIcon.svg?react';
import IconPlug from '../../assets/PlugInIcon.svg?react';
import IconGear from '../../assets/GearIcon.svg?react';
import HamBurger from '../../assets/Hamburger.svg?react'
import { setOpenSettingsSubBar } from "../../redux/uiSlice";


// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV = {
  configuration: [
    { id: "general", label: "General" },
    { id: "security", label: "Security" },
    { id: "notifications", label: "Notifications" },
  ],
  system: [
    { id: "integrations", label: "Integrations" },
    { id: "storage", label: "Storage & Data" },
  ],
};

// ─── Toggle ───────────────────────────────────────────────────────────────────
const Toggle = ({ defaultChecked = false }) => {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn((v) => !v)}
      className={`w-11 h-6 rounded-full border-none cursor-pointer p-0 shrink-0 relative transition-colors duration-200 ${on ? "bg-[#7C6EF5]" : "bg-[#3a3a3a]"}
  `}
    >
      <span
        className={` block w-4.5 h-4.5 rounded-full bg-white absolute top-0.75 transition-all duration-200 ${on ? "left-5.75" : "left-0.75"}
    `}
      />
    </button>
  );
};

// ─── Select ───────────────────────────────────────────────────────────────────
const Select = ({ options = [], defaultValue }) => (
  <div style={{ position: "relative", flexShrink: 0 }}>
    <select
      defaultValue={defaultValue}
      className=" appearance-none  bg-surface-3 text-[#e8e8e8] border border-[#3d3d3d] rounded-lg py-1.75 pr-8 pl-3 text-[14px] cursor-pointer outline-none font-inherit"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
    <svg
      className="absolute right-10 top-[50%] transform translate-y-[-50%] pointer-events-none"
      width="12" height="12" viewBox="0 0 12 12" fill="none"
    >
      <path d="M2 4l4 4 4-4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// ─── Card shell ───────────────────────────────────────────────────────────────
const Card = ({ children }) => (
  <div
    className="bg-surface-2 border border-border rounded-md mb-16 overflow-hidden"
  >
    {children}
  </div>
);

// ─── Card header ─────────────────────────────────────────────────────────────
const CardHead = ({ icon, title, sub, iconBg = "#3a3640" }) => (
  <div className="flex items-center gap-3.5 px-5 py-3.5 border-b border-[#383838]">

    <div
      className="w-9.5 h-9.5 rounded-[10px] flex items-center justify-center shrink-0"
      style={{ background: iconBg }}
    >
      {icon}
    </div>

    <div>
      <div className="text-[15px] font-medium text-[#e8e8e8]">
        {title}
      </div>

      {sub && (
        <div className="text-[12.5px] text-[#888] mt-px">
          {sub}
        </div>
      )}
    </div>

  </div>
);

// ─── Card row ─────────────────────────────────────────────────────────────────
const Row = ({ label, sub, children }) => (
  <div className="flex items-center justify-between px-5 py-3.5 gap-4 border-b border-[#383838]">

    <div className="flex-1 min-w-0">

      <div className="text-[14.5px] text-[#e0e0e0] font-normal">
        {label}
      </div>

      {sub && (
        <div className="text-[12px] text-[#777] mt-0.5 leading-[1.4]">
          {sub}
        </div>
      )}

    </div>

    {children}

  </div>
);

// ─── Storage progress bar ─────────────────────────────────────────────────────
const StorageRow = ({ label, pct, size, color }) => (
  <div className="flex items-center px-5 py-3.5 gap-4 border-b border-[#383838]">

    <div className="text-[14.5px] text-[#e0e0e0] min-w-20">
      {label}
    </div>

    <div className="flex-1 h-1.5 bg-[#3d3d3d] rounded-md overflow-hidden">
      <div
        className="h-full rounded-md"
        style={{
          width: `${pct}%`,
          background: color,
        }}
      />
    </div>

    <div className=" bg-[#333] border border-[#444] rounded-[20px] px-3 py-0.75 text-[12px] text-[#ccc] text-center min-w-14.5">
      {size}
    </div>

  </div>
);

// ─── Badge ────────────────────────────────────────────────────────────────────
const Badge = ({ label, color }) => {
  const colors = {
    green: { bg: "#1a3329", text: "#4ade80", border: "#2d5c45" },
    amber: { bg: "#332a16", text: "#fbbf24", border: "#5c4a1e" },
    red: { bg: "#331a1a", text: "#f87171", border: "#5c2e2e" },
  }[color] || {};
  return (
    <span
      className=" text-[12px] font-medium px-2.5 py-0.75 rounded-[20px] shrink-0"
      style={{
        background: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
    >
      {label}
    </span>
  );
};

// ─── Panes ────────────────────────────────────────────────────────────────────
const GeneralPane = () => (
  <>
    <Card>
      <CardHead icon={<IconGear className="h-5 w-5 text-white" />} iconBg="#2e2e2e" title="Workspace" sub="Basic identity and locale" />
      <Row label="Workspace name" sub="Visible to all members">
        <input placeholder="Acme Corp" className=" px-2.5 py-1.5 bg-surface-3 border border-[#3d3d3d] rounded-lg text-[#e0e0e0] text-[13.5px] font-inherit outline-none w-40" />
      </Row>
      <Row label="Timezone" sub="Used for scheduled tasks and reports">
        <Select options={["UTC+05:30 Kolkata", "UTC+00:00 London", "UTC-08:00 Pacific"]} defaultValue="UTC+05:30 Kolkata" />
      </Row>
      <Row label="Language" sub="Interface and system messages">
        <Select options={["English (US)", "English (UK)", "हिंदी"]} defaultValue="English (US)" />
      </Row>
    </Card>
    <Card>
      <CardHead icon={<IconGear className="h-5 w-5 text-white" />} iconBg="#2e2e2e" title="Appearance" sub="Display and theme preferences" />
      <Row label="Compact mode" sub="Reduce spacing in lists and tables"><Toggle /></Row>
      <Row label="Show activity status" sub="Let teammates see when you're active"><Toggle defaultChecked /></Row>
      <Row label="Date format">
        <Select options={["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]} defaultValue="DD/MM/YYYY" />
      </Row>
    </Card>
  </>
);

const SecurityPane = () => (
  <>
    <Card>
      <CardHead icon={<IconLock className="h-5 w-5 text-purple-300" />} iconBg="#2e2a3d" title="Authentication" sub="Login methods and MFA" />
      <Row label="Two-factor authentication" sub="Require 2FA for all members"><Toggle defaultChecked /></Row>
      <Row label="SSO provider" sub="Single sign-on via SAML 2.0"><Badge label="Connected" color="green" /></Row>
      <Row label="Session timeout" sub="Auto-logout after inactivity">
        <Select options={["4 hours", "8 hours", "24 hours", "Never"]} defaultValue="8 hours" />
      </Row>
    </Card>
    <Card>
      <CardHead icon={<IconLock className="h-5 w-5 text-purple-300" />} iconBg="#2e2a3d" title="Access control" sub="IP allowlist and permissions" />
      <Row label="IP allowlist" sub="Restrict access to specific IP ranges"><Toggle /></Row>
      <Row label="Audit log retention" sub="How long to keep access logs">
        <Select options={["90 days", "180 days", "1 year"]} defaultValue="90 days" />
      </Row>
    </Card>
  </>
);

const NotificationsPane = () => (
  <Card>
    <CardHead icon={<IconBell className="h-5 w-5 text-purple-300" />} iconBg="#1e2d38" title="Alert rules" sub="Email and in-app notifications" />
    <Row label="New member joined" sub="Notify admins when a user signs up"><Toggle defaultChecked /></Row>
    <Row label="Failed login attempts" sub="Alert after 5 consecutive failures"><Toggle defaultChecked /></Row>
    <Row label="Weekly digest" sub="Summary of usage and activity"><Toggle /></Row>
    <Row label="Billing alerts" sub="Notify on invoice and payment events"><Toggle defaultChecked /></Row>
  </Card>
);

const IntegrationsPane = () => (
  <Card>
    <CardHead icon={<IconPlug className="h-5 w-5 text-green-300" />} iconBg="#1e3330" title="Connected apps" sub="Third-party service connections" />
    <Row label="Slack" sub="Post alerts to #ops-alerts"><Badge label="Active" color="green" /></Row>
    <Row label="GitHub" sub="Sync repo events"><Badge label="Pending" color="amber" /></Row>
    <Row label="Google Workspace" sub="Directory sync"><Badge label="Disconnected" color="red" /></Row>
  </Card>
);

const StoragePane = () => (
  <>
    <Card>
      <CardHead icon={<IconDB className="h-5 w-5 text-purple-300" />} iconBg="#1e2535" title="Storage usage" sub="28.4 GB of 100 GB used" />
      <StorageRow label="Uploads" pct={64} size="18.1 GB" color="#7C6EF5" />
      <StorageRow label="Logs" pct={26} size="7.3 GB" color="#22c55e" />
      <StorageRow label="Backups" pct={10} size="3.0 GB" color="#f59e0b" />
    </Card>
    <Card>
      <CardHead icon={<IconHistory className="h-5 w-5 text-yellow-300" />} iconBg="#312d1e" title="Retention policy" sub="Auto-delete rules" />
      <Row label="Delete old logs after">
        <Select options={["30 days", "60 days", "90 days"]} defaultValue="30 days" />
      </Row>
      <Row label="Auto-archive inactive projects" sub="Move to cold storage after 6 months">
        <Toggle defaultChecked />
      </Row>
    </Card>
  </>
);

const PANES = {
  general: { label: "General", Component: GeneralPane },
  security: { label: "Security", Component: SecurityPane },
  notifications: { label: "Notifications", Component: NotificationsPane },
  integrations: { label: "Integrations", Component: IntegrationsPane },
  storage: { label: "Storage & Data", Component: StoragePane },
};

// ─── Main component ───────────────────────────────────────────────────────────
const SystemSettings = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.app.width);
  const settingsSubBarOpen = useSelector((state) => state.ui.openSettingsSubBar);
  const [active, setActive] = useState("general");

  useEffect(() => {
    dispatch(setTitle(["System Settings"]));
  }, [dispatch]);

  const { Component } = PANES[active];

  return (
    <div
      className={` grid ${width > 650 ? "grid-cols-[220px_1fr]" : "grid-cols-1"}  h-full  rounded-[10px] overflow-hidden  font-['Inter','Segoe_UI',system-ui,sans-serif]`}
    >

      {
        width > 650 && (
          <aside
            className="border-r  py-5 overflow-y-auto custom-scrollbar"
          >
            {Object.entries(NAV).map(([group, items]) => (
              <div key={group} className="mb-8">
                <div
                  className=" text-[10.5px] font-semibold tracking-[0.09em] uppercase text-[#555] pt-1 pb-2 px-4.5"
                >
                  {group}
                </div>
                {items.map(({ id, label }) => {
                  const isActive = active === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={` flex items-center gap-2.5 w-full px-4.5 py-2.25 border-none border-l-2 ${isActive ? "border-l-[#7C6EF5]" : "border-l-transparent"} ${isActive ? "text-[#e8e8e8] font-medium" : "text-[#888] font-normal"} text-[14px] cursor-pointer text-left font-inherit transition-colors duration-150 box-border `}
                    >
                      <span className={` w-4 h-4 rounded-[3px] shrink-0 inline-block transition-colors duration-150 ${isActive
                        ? "border-[1.5px] border-[#7C6EF5] bg-[#7C6EF530]"
                        : "border-[1.5px] border-[#555] bg-transparent"
                        } `} />
                      {label}
                    </button>
                  );
                })}
                {group === "configuration" && (
                  <div className=" h-px bg-[#333] my-2.5 mx-4" />
                )}
              </div>
            ))}
          </aside>
        )
      }


      {/* ── Content ── */}
      <main
        className=" px-8 py-7 overflow-y-auto custom-scrollbar scroll-smooth bg-surface border border-border rounded-md relative"
      >
        {
          width <= 650 && (
            <>
              <div className={`absolute top-2 left-3 ${settingsSubBarOpen && "hidden"}`} onClick={() => dispatch(setOpenSettingsSubBar(true))}>
                <HamBurger className="h-5 w-5  text-cyan-500" />
              </div>

              <div className={`absolute w-fit border-r border-border top-0 h-full
              transform ${settingsSubBarOpen ? "translate-x-0" : "-translate-x-200"} duration-200 z-10
            `}
                onClick={() => dispatch(setOpenSettingsSubBar(false))}
              >
                <aside
                  className="border-r bg-surface py-5 overflow-y-auto custom-scrollbar w-55 h-full"
                >
                  {Object.entries(NAV).map(([group, items]) => (
                    <div key={group} className="mb-8">
                      <div
                        className=" text-[10.5px] font-semibold tracking-[0.09em] uppercase text-[#555] pt-1 pb-2 px-4.5"
                      >
                        {group}
                      </div>
                      {items.map(({ id, label }) => {
                        const isActive = active === id;
                        return (
                          <button
                            key={id}
                            onClick={() => setActive(id)}
                            className={` flex items-center gap-2.5 w-full px-4.5 py-2.25 border-none border-l-2 ${isActive ? "border-l-[#7C6EF5]" : "border-l-transparent"} ${isActive ? "text-[#e8e8e8] font-medium" : "text-[#888] font-normal"} text-[14px] cursor-pointer text-left font-inherit transition-colors duration-150 box-border `}
                          >
                            <span className={` w-4 h-4 rounded-[3px] shrink-0 inline-block transition-colors duration-150 ${isActive
                              ? "border-[1.5px] border-[#7C6EF5] bg-[#7C6EF530]"
                              : "border-[1.5px] border-[#555] bg-transparent"
                              } `} />
                            {label}
                          </button>
                        );
                      })}
                      {group === "configuration" && (
                        <div className=" h-px bg-[#333] my-2.5 mx-4" />
                      )}
                    </div>
                  ))}
                </aside>
              </div>
            </>
          )
        }



        <div className="mb-5" >
          <h2 className=" text-2xl font-medium text-[#e8e8e8] m-0">
            {PANES[active].label}
          </h2>
          <p className=" text-[14px] text-[#777] mt-1.5">
            {{
              general: "Manage your workspace name, timezone, and display preferences.",
              security: "Control authentication methods, sessions, and access policies.",
              notifications: "Choose what events send alerts and to which channels.",
              integrations: "Connected third-party services and API keys.",
              storage: "Monitor usage and configure data retention policies.",
            }[active]}
          </p>
        </div>
        <Component />
      </main>
    </div>
  );
};

export default SystemSettings;