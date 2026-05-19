import React, { useEffect, useState } from 'react'
import OnlineTag from '../../components/OnlineTag.jsx';
import { FaEye as Eye } from "react-icons/fa";
import { RiPencilFill as Pen } from "react-icons/ri";
import { BsFillTrash3Fill as Trash } from "react-icons/bs";
import { MdOutlinePlaylistRemove as EmptyList } from "react-icons/md";
import { rolesItem, statusItem } from '../../config/RawData.js';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../redux/appSlice.js';

const size = 10;

const HandleActivity = ({ item }) => (
  <div className={`py-0.5 inline-flex items-center gap-2 px-3 rounded-full border ${item.borderCol} ${item.textCol} ${item.bgCol} whitespace-nowrap`}>
    <OnlineTag diameter={8} bgColor={item.color} />
    <span className='text-[10px]'>{item.title}</span>
  </div>
);

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["User Management", "User List"]));
  }, [dispatch]);

  const [checkedUser, setCheckedUser] = useState({});
  const totalChecked = Object.values(checkedUser).filter(Boolean).length;
  const allChecked = size > 0 && totalChecked === size;
  const indeterminate = totalChecked > 0 && totalChecked < size;
  const width = useSelector((state) => state.ui.width);

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      const all = {};
      Array.from({ length: size }).forEach((_, i) => { all[i] = true; });
      setCheckedUser(all);
    } else {
      setCheckedUser({});
    }
  };

  const handleRowCheck = (index, e) => {
    setCheckedUser(prev => ({ ...prev, [index]: e.target.checked }));
  };

  // Shared checkbox style injected once
  const checkboxClass = `
    appearance-none w-3.5 h-3.5 rounded-sm border border-border bg-surface-3
    checked:bg-cyan-300 checked:border-cyan-300
    indeterminate:bg-cyan-300/50 indeterminate:border-cyan-300
    cursor-pointer relative flex-shrink-0
    after:content-[''] after:absolute after:hidden
    checked:after:block
    after:left-[3px] after:top-[0px] after:w-[4px] after:h-[7px]
    after:border-r-2 after:border-b-2 after:border-gray-900 after:rotate-45
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-surface
    transition-colors duration-150
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className='bg-surface h-full w-full overflow-hidden'>
      <div className='h-full border border-border flex flex-col overflow-hidden'>

        {/* ── Meta bar ── */}
        <div className='bg-surface-3 text-white flex flex-row items-center justify-between px-4 text-[14px] py-1.5 shrink-0'>
          <div className='flex items-center gap-2'>
            <OnlineTag diameter={8} bgColor="blue" />
            <span>All Users</span>
          </div>
          <div className='flex flex-row items-center gap-3'>
            {totalChecked > 0 && (
              <span className='text-orange-500 bg-orange-300/10 border border-orange-400 px-3 rounded-full text-xs font-bold'>
                {totalChecked} Selected
              </span>
            )}
            <div className='flex flex-row items-center gap-2 font-bold text-sm'>
              <button className='text-red-500 hover:bg-red-500/20 px-2 py-0.5 rounded-full cursor-pointer transition-colors'>
                Delete
              </button>
              <button className='text-cyan-500 hover:bg-cyan-500/20 px-2 py-0.5 rounded-full cursor-pointer transition-colors'>
                Export
              </button>
            </div>
            <div className='text-sm'>
              <span className='text-text-muted'>Showing</span> 7 <span className='text-text-muted'>of 1200 users</span>
            </div>
          </div>
        </div>

        {/* ── Table area ── */}
        {size > 0 ? (
          <div className={`
      flex-1
      overflow-x-auto
      overflow-y-auto
      custom-scrollbar
      border
      border-border
      rounded-lg
      
    `}>
            <table className="
        border-collapse
        text-white
        min-w-250
        w-full
      "
            >

              {/* thead */}
              <thead className='sticky top-0 z-10 bg-surface-2'>
                <tr>
                  {/* Checkbox */}
                  <th className='w-10 px-4 py-2 text-center'>
                    <input
                      type='checkbox'
                      className={checkboxClass}
                      checked={allChecked}
                      ref={el => { if (el) el.indeterminate = indeterminate; }}
                      onChange={handleCheckAll}
                      aria-label='Select all users'
                    />
                  </th>
                  {['USER', 'EMAIL', 'ROLE', 'STATUS', 'LAST ACTIVE', 'ACTIONS'].map(col => (
                    <th
                      key={col}
                      className={`px-3 py-2 text-left text-[11px] font-bold text-text-muted tracking-wide uppercase whitespace-nowrap ${col === 'ACTIONS' ? 'text-center' : ''}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
                {/* subtle bottom border line */}
                <tr><td colSpan={8} className='h-px bg-border p-0' /></tr>
              </thead>

              {/* tbody */}
              <tbody>
                {Array.from({ length: size }).map((_, index) => {
                  const isChecked = checkedUser[index] || false;
                  return (
                    <tr
                      key={index}
                      className={`border-b border-border transition-colors duration-100 ${isChecked ? 'bg-cyan-500/5' : 'hover:bg-surface-2/60'}`}
                    >
                      {/* Checkbox */}
                      <td className='w-10 px-4 py-3 text-center'>
                        <input
                          type='checkbox'
                          className={checkboxClass}
                          checked={isChecked}
                          onChange={(e) => handleRowCheck(index, e)}
                          aria-label={`Select user ${index + 1}`}
                        />
                      </td>

                      {/* User */}
                      <td className='px-3 py-3 min-w-40'>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='shrink-0 flex items-center justify-center bg-linear-to-br from-blue-400 to-orange-500 w-9 h-9 rounded-full text-[13px] font-bold'>
                            JS
                          </div>
                          <div className='flex flex-col min-w-0'>
                            <span className='text-[13px] font-bold leading-tight truncate'>John Smith</span>
                            <span className='text-text-muted text-[10px] font-semibold'>Joined Jan 15, 2024</span>
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
                      <td className='px-3 py-3 text-text-muted text-[11px] font-bold whitespace-nowrap text-center min-w-25'>
                        1 hr ago
                      </td>

                      {/* Actions */}
                      <td className='px-3 py-3 min-w-40'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                          {/* View */}
                          <button className='flex flex-row items-center gap-1 bg-cyan-300/20 px-2 rounded-full border border-cyan-400 py-0.5 hover:bg-cyan-300/30 active:bg-cyan-300/10 transition-colors cursor-pointer'>
                            <Eye className='text-cyan-300 text-[12px]' />
                            <span className='text-cyan-300 text-[11px]'>View</span>
                          </button>

                          {/* Edit */}
                          <button className='flex flex-row gap-1 items-center border border-border px-2 rounded-full py-0.5 hover:bg-orange-500/10 active:bg-orange-500/20 transition-colors cursor-pointer'>
                            <Pen className='text-orange-500 text-[12px]' />
                            <span className='text-white text-[11px]'>Edit</span>
                          </button>

                          {/* Delete */}
                          <button className='border border-border px-2 rounded-full py-0.5 hover:bg-red-500/10 active:bg-red-500/20 transition-colors cursor-pointer'>
                            <Trash className='text-[13px] text-red-600' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className='flex-1 w-full flex flex-col items-center justify-center'>
            <div className='text-cyan-700 text-9xl bg-cyan-700/20 px-20 flex items-center justify-center rounded-full border-[5px] border-cyan-700'>
              <EmptyList />
            </div>
          </div>
        )}

        {/* ── Pagination ── */}
        {size > 0 && (
          <div className='border-t border-border px-4 py-2 flex items-center justify-between shrink-0 bg-surface-3'>
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