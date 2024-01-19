package com.dao;

import com.entity.XiangmuxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XiangmuxinxiVO;
import com.entity.view.XiangmuxinxiView;


/**
 * 项目信息
 * 
 * @author 
 * @email 
 * @date 2021-03-10 20:37:30
 */
public interface XiangmuxinxiDao extends BaseMapper<XiangmuxinxiEntity> {
	
	List<XiangmuxinxiVO> selectListVO(@Param("ew") Wrapper<XiangmuxinxiEntity> wrapper);
	
	XiangmuxinxiVO selectVO(@Param("ew") Wrapper<XiangmuxinxiEntity> wrapper);
	
	List<XiangmuxinxiView> selectListView(@Param("ew") Wrapper<XiangmuxinxiEntity> wrapper);

	List<XiangmuxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<XiangmuxinxiEntity> wrapper);
	
	XiangmuxinxiView selectView(@Param("ew") Wrapper<XiangmuxinxiEntity> wrapper);
	
}
