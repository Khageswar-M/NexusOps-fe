 import React, { useEffect, useState } from 'react'
  import OnlineTag from '../../components/OnlineTag.jsx';
  import Eye from '../../assets/Eye.svg?react';
  import Pen from '../../assets/Edit.svg?react';
  import Trash from '../../assets/TrashBin.svg?react';
  import EmptyIcon from '../../assets/empty_roles.png';
  import CheckIcon from '../../assets/Check.svg?react';
  import { rolesItem, statusItem } from '../../config/RawData.js';

  // redux
  import { useDispatch, useSelector } from 'react-redux';
  import { setTitle } from '../../redux/appSlice.js';

  const size = 10;

  const HandleActivity = ({ item }) => (
    <div className={`py-0.5 inline-flex items-center gap-2 px-3 rounded-full border ${item.borderCol}
  ${item.textCol} ${item.bgCol} whitespace-nowrap`}>
      <OnlineTag diameter={8} bgColor={item.color} />
      <span className='text-[10px]'>{item.title}</span>
    </div>
  );

  const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setTitle(["User Management", "User List"]));
    }, [dispatch]);

    const width = useSelector((state) => state.app.width);

    // ── Reports-style checkbox state ──
    const [checkedUser, setCheckedUser] = useState({});
    const [checkAll, setCheckAll] = useState(false);

    const handleCheckAll = () => {
      const next = !checkAll;
      setCheckAll(next);
      if (next) {
        const all = {};
        Array.from({ length: size }).forEach((_, i) => { all[i] = true; });
        setCheckedUser(all);
      } else {
        setCheckedUser({});
      }
    };

    const handleRowCheck = (i) => {
      setCheckedUser(prev => {
        const updated = { ...prev, [i]: !prev[i] };
        const allChecked = size > 0 && Array.from({ length: size }).every((_, idx) => updated[idx]);
        setCheckAll(allChecked);
        return updated;
      });
    };

    // ── Custom Checkbox (same as Reports) ──
    const Checkbox = ({ checked, onClick }) => (
      <div
        className={`h-4 w-4 rounded-sm cursor-pointer flex items-center justify-center shrink-0 transition-colors
  duration-150 ${checked ? "bg-cyan-500" : "bg-gray-800 border border-gray-600"}`}
        onClick={onClick}
      >
        {checked && <CheckIcon className="w-3 h-3 text-gray-900" />}
      </div>
    );

    return (
      <div className='bg-surface h-full w-full overflow-hidden'>
        <div className='h-full border border-border rounded-md grid grid-rows-[auto_1fr_auto] overflow-hidden'>

          {/* ── Meta bar ── */}
          <div className='bg-surface-3 text-white flex flex-row items-center justify-between px-4 text-[14px]
  py-1.5'>
            <div className='flex items-center gap-2'>
              <OnlineTag diameter={8} bgColor="blue" />
              <span>All Users</span>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <div className='text-sm'>
                <span className='text-text-muted'>Showing</span> 7 <span className='text-text-muted'>of 1200
  users</span>
              </div>
            </div>
          </div>

          {/* ── Table area ── */}
          {size > 0 ? (
            <div className='overflow-hidden min-h-0'>
              <div className={`h-full custom-scrollbar border border-border rounded-lg ${width <= 1300 ?
  "overflow-x-auto overflow-y-auto" : "overflow-y-auto overflow-x-auto"}`}>
                <table className={`text-white border-collapse ${width <= 1300 ? "min-w-325" : "w-full"}`}>

                  {/* thead */}
                  <thead className='sticky top-0 z-10 bg-surface-2'>
                    <tr>
                      {/* Checkbox */}
                      <th className='w-10 px-4 py-2 text-center'>
                        <Checkbox checked={checkAll} onClick={() => handleCheckAll()} />
                      </th>
                      {['USER', 'EMAIL', 'ROLE', 'STATUS', 'LAST ACTIVE', 'ACTIONS'].map(col => (
                        <th
                          key={col}
                          className={`px-3 py-2 text-left text-[11px] font-bold text-text-muted uppercase
  whitespace-nowrap ${col === 'ACTIONS' ? 'text-center' : ''}`}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                    <tr><td colSpan={8} className='h-px bg-border p-0' /></tr>
                  </thead>

                  {/* tbody */}
                  <tbody>
                    {Array.from({ length: size }).map((_, index) => {
                      const isChecked = checkedUser[index] ?? false;
                      return (
                        <tr
                          key={index}
                          className={`border-b border-border transition-colors duration-100 ${isChecked ?
  'bg-cyan-500/5' : 'hover:bg-surface-2/60'}`}
                        >
                          {/* ── Checkbox (Reports-style) ── */}
                          <td className='w-10 px-4 py-3 text-center'>
                            <Checkbox checked={isChecked} onClick={() => handleRowCheck(index)} />
                          </td>

                          {/* User */}
                          <td className='px-3 py-3 min-w-40'>
                            <div className='flex flex-row items-center gap-2'>
                              <div className='shrink-0 flex items-center justify-center bg-linear-to-br
  from-blue-400 to-orange-500 w-9 h-9 rounded-full text-[13px] font-bold'>
                                JS
                              </div>
                              <div className='flex flex-col min-w-0'>
                                <span className='text-[13px] font-bold leading-tight truncate'>John Smith</span>
                                <span className='text-text-muted text-[10px] font-semibold'>Joined Jan 15,
  2024</span>
                              </div>
                            </div>
                          </td>

                          {/* Email */}
                          <td className='px-3 py-3 text-text-muted text-[12px] min-w-45'>
                            johnsmith@gmail.com
                          </td>

                          {/* Role */}
                          <td className='px-3 py-3 min-w-25'>
                            <HandleActivity item={rolesItem?.[5]} />
                          </td>

                          {/* Status */}
                          <td className='px-3 py-3 min-w-25'>
                            <HandleActivity item={statusItem?.[3]} />
                          </td>

                          {/* Last Active */}
                          <td className='px-3 py-3 text-text-muted text-[11px] font-bold whitespace-nowrap
  text-center min-w-25'>
                            1 hr ago
                          </td>

                          {/* Actions */}
                          <td className='px-3 py-3 min-w-40'>
                            <div className='flex flex-row items-center justify-center gap-2'>
                              <button className='flex flex-row items-center gap-1 rounded-md p-1 border
  border-border hover:bg-cyan-300/10 active:bg-cyan-300/10 cursor-pointer'>
                                <Eye className='text-text-muted h-4 w-5' />
                              </button>
                              <button className='flex flex-row gap-1 items-center border border-border p-1
  rounded-md py-0.5 hover:bg-orange-500/10 active:bg-orange-500/20 transition-colors cursor-pointer'>
                                <Pen className='text-orange-500 h-5 w-5' />
                              </button>
                              <button className='border border-border p-1 rounded-md hover:bg-red-500/10
  active:bg-red-500/20 transition-colors cursor-pointer'>
                                <Trash className='h-4 w-5 text-red-600' />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className='flex-1 w-full flex flex-col items-center justify-center'>
              <div className='text-cyan-700 text-9xl bg-cyan-700/20 px-20 flex items-center justify-center
  rounded-full border-[5px] border-cyan-700'>
                <img src={EmptyIcon} alt="" />
              </div>
            </div>
          )}

          {/* ── Pagination ── */}
          {size > 0 && (
            <div className='border-t border-border px-4 py-2 flex items-center justify-between shrink-0
  bg-surface-3'>
              <span className='text-text-muted text-xs'>Page 1 of 120</span>
              <div className='flex items-center gap-1'>
                {['«', '‹', '1', '2', '3', '›', '»'].map((p, i) => (
                  <button
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded border transition-colors ${p === '1'
                      ? 'bg-cyan-500 text-gray-900 font-bold border-cyan-500'
                      : 'text-text-muted hover:text-white hover:border-cyan-500 border-border bg-transparent'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default UserList;