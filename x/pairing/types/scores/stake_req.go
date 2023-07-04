package score

import (
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	epochstoragetypes "github.com/lavanet/lava/x/epochstorage/types"
)

// stake requirement that implements the ScoreReq interface
type StakeReq struct {
	stake sdk.Coin
}

const (
	STAKE_REQ_NAME = "stake-req"
)

// calculates the stake score of a provider (which is simply the normalized stake)
func (sr StakeReq) Score(provider epochstoragetypes.StakeEntry, weight uint64) uint64 {
	return uint64(math.Pow(provider.Stake.Amount.ToDec().MustFloat64(), float64(weight)))
}

func (sr StakeReq) GetName() string {
	return STAKE_REQ_NAME
}
